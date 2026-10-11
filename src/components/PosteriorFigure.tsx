// Decorative hero figure: a bimodal posterior density with a hatched 95%
// credible interval and a rug of "HMC draws". Everything is computed
// deterministically at render time so the markup is stable.

const WIDTH = 1000;
const HEIGHT = 238;
const BASELINE = 180;
const X_MIN = 40;
const X_MAX = 960;
const PEAK_HEIGHT = 150;
const BRACKET_Y = 226;

const components = [
  { weight: 0.68, mean: 590, sd: 88 },
  { weight: 0.32, mean: 360, sd: 56 },
];

function density(x: number) {
  return components.reduce(
    (sum, { weight, mean, sd }) =>
      sum + (weight * Math.exp(-0.5 * ((x - mean) / sd) ** 2)) / (sd * Math.sqrt(2 * Math.PI)),
    0
  );
}

// Seeded PRNG (mulberry32) so the rug is identical on every render.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const xs = Array.from({ length: (X_MAX - X_MIN) / 5 + 1 }, (_, i) => X_MIN + i * 5);
const ys = xs.map(density);
const maxDensity = Math.max(...ys);
const toY = (d: number) => BASELINE - (d / maxDensity) * PEAK_HEIGHT;
const points = xs.map((x, i) => [x, toY(ys[i])] as const);

const curvePath = points
  .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
  .join(" ");

// Numerical CDF to find the 2.5% / 97.5% quantiles.
const total = ys.reduce((a, b) => a + b, 0);
let running = 0;
let lower = X_MIN;
let upper = X_MAX;
xs.forEach((x, i) => {
  const before = running;
  running += ys[i] / total;
  if (before < 0.025 && running >= 0.025) lower = x;
  if (before < 0.975 && running >= 0.975) upper = x;
});

const intervalPath = [
  `M${lower} ${BASELINE}`,
  ...points.filter(([x]) => x >= lower && x <= upper).map(([x, y]) => `L${x.toFixed(1)} ${y.toFixed(1)}`),
  `L${upper} ${BASELINE} Z`,
].join(" ");

const posteriorMean = components.reduce((sum, { weight, mean }) => sum + weight * mean, 0);

const random = mulberry32(5000);
const draws = Array.from({ length: 72 }, () => {
  const pick = random() < components[0].weight ? components[0] : components[1];
  const gaussian = Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());
  return Math.min(X_MAX, Math.max(X_MIN, pick.mean + pick.sd * gaussian));
});

const ticks = Array.from({ length: 11 }, (_, i) => X_MIN + (i * (X_MAX - X_MIN)) / 10);

export default function PosteriorFigure() {
  return (
    <figure className="posterior">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label="A hand-drawn posterior density curve">
        <defs>
          <pattern id="posterior-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" className="hatch-line" />
          </pattern>
        </defs>

        <path d={intervalPath} className="ci" />
        <path d={curvePath} className="curve" pathLength={1} />

        <line x1={X_MIN} y1={BASELINE} x2={X_MAX} y2={BASELINE} className="axis" />
        {ticks.map((x) => (
          <line key={x} x1={x} y1={BASELINE} x2={x} y2={BASELINE + 6} className="axis" />
        ))}

        {draws.map((x, i) => (
          <line
            key={i}
            x1={x}
            y1={BASELINE + 12}
            x2={x}
            y2={BASELINE + 26}
            className="rug"
            style={{ animationDelay: `${1.7 + i * 0.018}s` }}
          />
        ))}

        <line x1={posteriorMean} y1={BASELINE} x2={posteriorMean} y2={8} className="mean" />
        <text x={posteriorMean - 10} y={24} textAnchor="end" className="fig-label fig-fade">
          E[θ | 𝒟]
        </text>
        <text x={X_MIN} y={22} className="fig-label fig-fade">
          p(θ | 𝒟)
        </text>
        <text x={X_MAX} y={BASELINE - 12} textAnchor="end" className="fig-label fig-fade">
          θ
        </text>

        <g className="bracket fig-fade">
          <line x1={lower} y1={BRACKET_Y - 5} x2={lower} y2={BRACKET_Y + 5} />
          <line x1={lower} y1={BRACKET_Y} x2={(lower + upper) / 2 - 62} y2={BRACKET_Y} />
          <line x1={(lower + upper) / 2 + 62} y1={BRACKET_Y} x2={upper} y2={BRACKET_Y} />
          <line x1={upper} y1={BRACKET_Y - 5} x2={upper} y2={BRACKET_Y + 5} />
          <text x={(lower + upper) / 2} y={BRACKET_Y + 4} textAnchor="middle" className="fig-label-mono">
            95% CREDIBLE
          </text>
        </g>
      </svg>
      <figcaption>
        <span className="fig-tag">Fig. 2</span> Posterior probability that you keep scrolling, estimated from 5,000 HMC draws.
      </figcaption>
    </figure>
  );
}

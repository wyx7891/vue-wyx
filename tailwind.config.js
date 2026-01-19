/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PeachBlossomSpring 深色主题颜色
        'pbs-primary': '#ff7eb3',
        'pbs-secondary': '#7f5af0',
        'pbs-accent': '#2cb67d',
        'pbs-bg': '#16161a',
        'pbs-surface': '#242629',
        'pbs-text-primary': '#fffffe',
        'pbs-text-secondary': '#94a1b2',

        // 彩虹色系 (用于 MovingBox 和 WyxMainView)
        'rainbow-red': '#FF6B6B',
        'rainbow-orange': '#FFA726',
        'rainbow-yellow': '#FFEE58',
        'rainbow-green': '#B2FF59',
        'rainbow-cyan': '#66D9EF',
        'rainbow-purple': '#967ADC',
        'rainbow-pink': '#DA8FFF',

        // PasswordCheck 颜色
        'check-bg': '#f8f9fa',
        'check-blue': '#007bff',
        'check-blue-dark': '#0056b3',
        'check-error': '#e74c3c',
        'check-green': '#4CAF50',

        // Clock 颜色
        'clock-text': '#2c3e50',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-green': '0 0 10px rgba(34, 139, 34, 0.3), 0 0 20px rgba(34, 139, 34, 0.3), 0 0 30px rgba(34, 139, 34, 0.2), 0 0 40px rgba(34, 139, 34, 0.15), 0 0 50px rgba(34, 139, 34, 0.1)',
        'glow-purple': '0 0 15px rgba(255, 0, 255, 0.7)',
        'glow-pbs': '0 0 25px rgba(76, 175, 80, 0.4), 0 0 50px rgba(76, 175, 80, 0.3), 0 0 80px rgba(76, 175, 80, 0.2)',
      },
      animation: {
        'pulse-custom': 'pulse 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}


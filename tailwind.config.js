// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind CSS를 적용할 파일 범위
  ],
  theme: {
    extend: {
      colors: {
        'color-black': '#0e111b',
        'color-white': '#fff',
        'color-white-50': 'rgba(255, 255, 255, 0.5)',
        'color-white-30': 'rgba(255, 255, 255, 0.3)',
        'color-white-20': 'rgba(255, 255, 255, 0.2)',
        'color-white-10': 'rgba(255, 255, 255, 0.1)',
        'color-white-5': 'rgba(255, 255, 255, 0.05)',
        'color-primary': '#fdc000',
        'color-hover': '#f86a05',
        'color-area': '#1c212e',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'skeleton-loader': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'skeleton-loader': 'skeleton-loader 2s infinite',
      },
      spacing: {
        'container-padding': '40px', // 기본 컨테이너 패딩
        'container-padding-sm': '20px', // 작은 화면 컨테이너 패딩
      },
      borderRadius: {
        btn: '4px', // 버튼에 적용할 기본 border-radius
      },
      fontSize: {
        btn: '14px',
        'headline-lg': '80px',
        'headline-sm': '60px',
      },
      maxWidth: {
        container: '1120px', // 최대 너비 설정
      },
      screens: {
        sm: '600px', // 600px 이상일 때 적용되는 브레이크포인트
        lg: '1200px', // 1200px 이상일 때 적용되는 브레이크포인트
      },
    },
  },
  plugins: [],
};

// Particles.jsの初期化設定
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3787908679834909,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.44755244755244755,
        "sync": false
      }
    },
    "size": {
      "value": 15.782952832645451,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4.795204795204795,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.603412060865523,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 2244.776885211732,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Colorisの初期設定
Coloris({
  el: '[data-coloris]',
  theme: 'dark',
  format: 'hex',
  defaultColor: '#ffffff'
});

// カラーピッカーの値変更時にParticles.jsの色を動的に更新する処理
const colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener('input', (e) => {
  const newColor = e.target.value;

  if (window.pJSDom && window.pJSDom[0]) {
    const pJS = window.pJSDom[0].pJS;

    // パーティクルの設定色を更新
    pJS.particles.color.value = newColor;
    pJS.particles.line_linked.color = newColor;

    // 既に描画されている既存パーツの色情報をHEXからRGBに変換して一括更新
    const hexToRgb = (hex) => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };

    const rgb = hexToRgb(newColor);
    if (rgb) {
      pJS.particles.color.rgb = rgb;
      pJS.particles.line_linked.color_rgb_line = rgb;

      // 画面上の全パーティクルオブジェクトの色を即時更新
      pJS.particles.array.forEach(particle => {
        particle.color.value = newColor;
        particle.color.rgb = rgb;
      });
    }
  }
});

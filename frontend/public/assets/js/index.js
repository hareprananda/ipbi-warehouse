/* eslint-disable no-undef */

const initDashboard = () => {

    const scriptArr = [
        "/assets/js/app.min.js",
        "/assets/js/app.init.js",
        "/assets/js/app-style-switcher.js",
    
        "/assets/js/perfect-scrollbar.jquery.min.js",
        "/assets/js/jquery.sparkline.min.js",
    
        "/assets/js/waves.js",
    
        "/assets/js/sidebarmenu.js",
    
        "/assets/js/feather.min.js",
        "/assets/js/custom.min.js",
    
        "/assets/js/apexcharts.min.js",
        // "/assets/js/pages/dashboards/dashboard1.js",
    
      ];
      const wrapper = document.createElement("div");
      scriptArr.forEach((v) => {
        const script = document.createElement("script");
        script.async = false
        script.defer = true
        script.src = v
        wrapper.appendChild(script);
      });
      document.body.appendChild(wrapper);
}

window.initDashboard = initDashboard

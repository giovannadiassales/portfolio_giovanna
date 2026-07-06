 document.addEventListener("DOMContentLoaded", () => {
            // LÓGICA DO MENU MOBILE
            const mobileMenuButton = document.getElementById("mobile-menu-button");
            const mobileMenu = document.getElementById("mobile-menu");

            if (mobileMenuButton && mobileMenu) {
                // Remove qualquer evento antigo para não duplicar
                mobileMenuButton.replaceWith(mobileMenuButton.cloneNode(true));
                
                // Pega a referência nova do botão clonado
                const newMobileButton = document.getElementById("mobile-menu-button");
                newMobileButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    mobileMenu.classList.toggle("hidden");
                });
            }

            // LÓGICA DO MODO ESCURO
            const desktop = document.getElementById("theme-toggle-desktop");
            const mobile = document.getElementById("theme-toggle-mobile");

            function toggleTheme(e) {
                if (e) e.preventDefault();
                
                // Aplica nas duas tags para garantir compatibilidade local
                document.documentElement.classList.toggle("dark");
                document.body.classList.toggle("dark");

                // Força atualização no Tailwind
                window.dispatchEvent(new Event('resize'));

                const isDark = document.documentElement.classList.contains("dark");
                const icon = isDark ? "☀️" : "🌙";

                if (desktop) desktop.textContent = icon;
                if (mobile) mobile.textContent = icon;
            }

            if (desktop) desktop.addEventListener("click", toggleTheme);
            if (mobile) mobile.addEventListener("click", toggleTheme);
        });
import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import "/styles/global.css";

import CartProvider from "@store/Cart";

export const reportWebVitals = (metric) => {
	// las métricas se pueden exportar a analytics
}

const MyApp = ({ Component, pageProps }: AppProps) => {
	// Additional props
	// Additional layout
	// Manejar errores - componentDidCatch
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
};

export default MyApp;

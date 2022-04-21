import * as React from "react";
import { GlobalStyles } from "twin.macro";
import { Helmet } from "react-helmet";

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div {...rest}>
		{process.env.NODE_ENV !== `production` && (
			<Helmet>
			<script defer>
				{`
				window.markerConfig = {
					destination: 'REPLACE ME WITH YOUR PROJECTS DESTINATION ID', 
					source: 'snippet'
				};
				!function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);`}
			</script>
		</Helmet>
		)}
		<GlobalStyles />
		{children}
	</div>
);

export default Layout;

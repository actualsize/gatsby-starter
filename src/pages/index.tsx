import Layout from "../components/Layout";
import "twin.macro";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<div tw="text-2xl text-red-400 m-10">Hello world!</div>
		</Layout>
	);
};
export default Home;

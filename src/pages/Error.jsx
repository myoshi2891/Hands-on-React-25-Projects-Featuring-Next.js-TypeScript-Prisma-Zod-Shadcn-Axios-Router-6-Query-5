import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

function Error() {
	const error = useRouteError();
	console.log(error);

	if (error.status === 404) {
		return (
			<Wrapper>
				<div className="">
					<img src={img} alt="not found" />
					<h3>Ohh!</h3>
					<p>We can't seem to find page you are looking for</p>
					<Link to="/">back home</Link>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<div className="">
				<h3>Something went wrong</h3>
			</div>
		</Wrapper>
	);
}

export default Error;

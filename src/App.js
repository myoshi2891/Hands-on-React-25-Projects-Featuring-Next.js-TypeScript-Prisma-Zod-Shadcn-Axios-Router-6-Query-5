import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
	const { cartItems, isLoading } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);

	useEffect(() => {
		dispatch(getCartItems("random"));
	}, []);

	if (isLoading) {
		return <div className="loading">Loading...</div>;
	}
	return (
		<main>
			{isOpen && <Modal />}
			<NavBar />
			<CartContainer />
		</main>
	);
}
export default App;

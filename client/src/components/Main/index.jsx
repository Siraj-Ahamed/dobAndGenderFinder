import styles from "./styles.module.css";
import calculator from "./calculator"
import Calculator from "./calculator";



const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>DOB FINDER</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Calculator>y</Calculator>
			
		</div>

		

	);
};

export default Main;

import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

const Header = ({ data }: HeaderProps): JSX.Element => {

	return (
		<div className={styles.header}>
			<div className='container'>
				<div className={styles.flex}>
					<span>
						<a href='/'>
							<h1>Exchanger rates</h1>
						</a>
					</span>

					{data && <div className={styles.flex}>
						{Object.entries(data.rates).map(([key, value], index) => (
							key !== data.base && (
								<div className={styles.data} key={index}>
									<header className={styles.cc}>{key} / {data.base}</header>
									<div className={styles.rate}>{(1 / value).toFixed(2)}</div>
									<div className={styles.cc}>{key}</div>
								</div>
							)
						)
						)}
					</div>}
				</div>
			</div>
		</div>
	)
}

export default Header

import React from 'react'
import styles from "@/app/styles/login.module.css"

const Signup = () => {
  return (
	<main classNameName='text-gray-300 flex min-h-screen flex-col items-center justify-between'>
 




	<div className={styles.wrapper}>
	
	<div className="w-full max-w-sm m-auto border border-white border-opacity-40 bg-white bg-opacity-20 w-250 rounded-md p-10 md:p-15 mx-auto mb-10 block text-center text-white text-18 transition duration-250 font-light">
	
		<form className={styles.form}>
			<div>
			   
				<div class={styles.inputcontainer}>
	  				<input type="text" id={styles.input} required=""/>
	  				<label for="input" class={styles.label}>Name</label>
	  				<div class={styles.underline}></div>
	
				</div>
			</div>


			<div>
			   
				<div class={styles.inputcontainer}>
	  				<input type="text" id={styles.input} required=""/>
	  				<label for="input" class={styles.label}>User ID</label>
	  				<div class={styles.underline}></div>
	
				</div>
			</div>

			<div>
			   
				<div class={styles.inputcontainer}>
	  				<input type="text" id={styles.input} required=""/>
	  				<label for="input" class={styles.label}>Email</label>
	  				<div class={styles.underline}></div>
	
				</div>
			</div>


	
			<div className="mt-2">
			<div class={styles.inputcontainer}>
	  <input type="password" id={styles.input} required=""/>
	  <label for="input" class={styles.label}>Password</label>
	  <div class={styles.underline}></div>
	
	</div>
	

			</div>
	
			<div className="mt-6">
				<button
					id="login-button"
				>
					Sign Up
				</button>
			</div>
		</form>
	
		<div className="flex px-7 items-center justify-between mt-4">
			
		</div>
	
		<p className="mt-8 text-xs pb-4 font-light text-center text-gray-400">
			Already have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</a>
		</p>
	</div></div>
	
	
	<ul className={styles.bgbubble}>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	
	
	
		</main>
  )
}

export default Signup;
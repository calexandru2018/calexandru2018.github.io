<template>
	<div class="contact-form">
		<textarea name="message" id=""></textarea>
		<input type="email" placeholder="email">
		<button>Send</button>
	</div>
</template>

<style lang="scss" scoped>
	.contact-form{
		display: grid;
		height: fit-content;
		grid-gap: 0.5em;
	}
	textarea{
		width: 80%;
		height: 200px;
		resize: vertical;
		border-radius: 15px;
		border: none;
		padding: 10% 10%;
		box-shadow: inset 0px 0px 6px -1px #EEE1B3;
		color: unset;
	}
	input{
		resize: vertical;
		border-radius: 10px;
		border: none;
		padding: 10px 20px;
		box-shadow: inset 0px 0px 6px -1px #EEE1B3;
		color: unset;
	}
	button{
		width: fit-content;
		justify-self: end;
		background-color: white;
		padding: 5px 10px;
		border-radius: 5px;
		color: unset;
		font-weight: bold;
		border: none;
		text-transform: uppercase;
		box-shadow: inset 0px 0px 6px -1px #EEE1B3;
		transition: transform ease-in-out 0.1s;
	}
	button:active{
		// background-color: transparent;
		animation: scaling ease-out 0.1s forwards;
		// transform: scale(0)
	}
</style>
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
		height: 100px;
		grid-gap: 0.5em;
		textarea{
			width: 80%;
			height: 200px;
			resize: vertical;
			border-radius: 5px;
			border: 2px solid rgb(80, 146, 156);
			outline: none;
			padding: 10% 10%;
			// box-shadow: inset 0px 0px 6px -1px #EEE1B3;
			color: unset;
			transition: all ease-in-out 0.2s;
			&:active, &:hover{
				border-color: orange;
				outline: none;
			}
		}
		input{
			resize: vertical;
			border-radius: 5px;
			border: 2px solid rgb(80, 146, 156);
			outline: none;
			padding: 10px 20px;
			color: unset;
			transition: all ease-in-out 0.2s;
			&:active, &:hover{
				border-color: orange;
				outline: none;
			}
		}
		button{
			width: fit-content;
			justify-self: end;
			background-color: white;
			padding: 5px 10px;
			border-radius: 5px;
			color: unset;
			font-weight: bold;
			border: 2px solid rgb(80, 146, 156);
			outline: none;
			text-transform: uppercase;
			transition: all ease-in-out 0.2s;
			&:active, &:hover{
				border-color: orange;
				outline: none;
			}
		}
	}
</style>
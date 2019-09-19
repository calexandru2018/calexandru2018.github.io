<template>
	<div class="contact-form">
		<textarea name="message" id=""></textarea>
		<input type="email" placeholder="email">
		<button>Send</button>
	</div>
</template>

<style lang="scss" scoped>
$def-border-clr: rgb(80, 146, 156);
$hover-border-clr: rgb(255, 165, 0);
$btn-bckgd-clr: rgb(255,255,255);

	.contact-form{
		display: grid;
		height: 100px;
		grid-gap: 0.5em;
		textarea{
			width: 80%;
			height: 200px;
			resize: vertical;
			border-radius: 5px;
			border: 2px solid $def-border-clr;
			outline: none;
			padding: 10% 10%;
			// box-shadow: inset 0px 0px 6px -1px #EEE1B3;
			color: unset;
			transition: all ease-in-out 0.2s;
			&:active, &:hover{
				border-color: $hover-border-clr;
				outline: none;
			}
		}
		input{
			resize: vertical;
			border-radius: 5px;
			border: 2px solid $def-border-clr;
			outline: none;
			padding: 10px 20px;
			color: unset;
			transition: all ease-in-out 0.2s;
			&:active, &:hover{
				border-color: $hover-border-clr;
				outline: none;
			}
		}
		button{
			width: fit-content;
			justify-self: end;
			background-color: $btn-bckgd-clr;
			padding: 5px 10px;
			border-radius: 5px;
			color: unset;
			font-weight: bold;
			border: 2px solid $def-border-clr;
			outline: none;
			text-transform: uppercase;
			transition: all ease-in-out 0.2s;
			&:active, &:hover{
				border-color: $hover-border-clr;
				outline: none;
			}
		}
	}
</style>
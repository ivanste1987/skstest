<template>
  <dialog open>
    <slot>
      <p>{{ error }}</p>
    </slot>
  </dialog>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style >
dialog {
  position: fixed;
  z-index: 9999;
  width: 30%;
  height: auto;
  bottom: 0%;
  left: 0%;
  background-color: #393638;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  padding: 1rem;
  text-align: center;
  opacity: 0;

 
}
dialog p {
    padding: 1rem;
    text-align: center;
    color: #fff;
  }
.show {
  animation: show-message 0.35s ease-in-out forwards;
}
@keyframes show-message {
  0% {
    opacity: 0;
    transform: translateY(101%);
    
  }
  100% {
    opacity: 1;
    transform: translateY(1%);
  }
}
</style>
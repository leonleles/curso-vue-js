<template>
        <input type="text">
</template>

<script>
export default {
  props: ["nome", "sobrenome"],
};
</script>

<style scoped>
input,
textarea,
select {
  flex: 1;
  font-size: 1.4rem;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
}

input:focus {
  border: 1px solid #bbb;
}
</style>

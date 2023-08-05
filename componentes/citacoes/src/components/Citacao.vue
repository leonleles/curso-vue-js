<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    created() {
        // eslint-disable-next-line no-console
        console.log('created')
    },
    destroyed() {
        // eslint-disable-next-line no-console
        console.log('destroyed')
    },
    activated() {
        // eslint-disable-next-line no-console
        console.log('activated')
    },
    deactivated() {
        // eslint-disable-next-line no-console
        console.log('deactivated')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>

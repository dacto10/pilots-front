<template>
    <div :class="['form', `form--${type}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ["type"]
}
</script>
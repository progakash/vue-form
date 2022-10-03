<template>
    <label>Name</label>
    <input v-bind="$attrs">
</template>

<script>
export default{
    inheritAttrs: false,
    name: 'RootInputApp'
}
</script>

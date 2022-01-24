<template>
    <div> {{ a }}</div>
</template>
<script lang="ts">
export default {
    methods: {
        clikc () {
            const obj = { a: 1,b: 2 }
            console.log(obj)
        }
    },
}
</script>

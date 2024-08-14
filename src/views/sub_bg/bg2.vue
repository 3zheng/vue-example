<template>
    <div>来点不一样的bg2页面,参数1={{myid}},参数2={{myname}}</div>
</template>

<script>
export default {
    props:['id','name'],
    name: "bg",
    data() {
        return {
            myid: this.id+500,
            myname: 'i am '+this.name,
        }
    },
};
</script>

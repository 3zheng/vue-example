<template>
  <div>
    我是bg1页面
  </div>
</template>

<script>
export default {
    name:'bg1',
    beforeRouteEnter:(to,from,next) =>{
        console.log("进入bg1路由")
        next(vm => {
            
        })
    }
};
</script>


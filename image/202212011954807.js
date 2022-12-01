
    function yidong(name, zhi, huidiao) {
        //封装动画函数前，首先结束一次这个函数，防止多次触发
        clearInterval(name.gif)

        // 使用定时器重复这个流程，并且利用函数 给不同对象添加不同定时器
        name.gif = setInterval(function () {
            //获取当前盒子位置 offset  让盒子在当前位置加移动距离
            // 匀速动画
            // name.style.left = name.offsetLeft + 3 + 'px'

            // 缓动动画:
            //如果需要缓动动画，公式 ： （目标值 - 现在的位置） / 10   意义是先快后慢，到地方后停止
            //顺便为了避免小数的出现 使用向上取整Math.ceil  与向下取整 Math.floor

            //首先确定缓动动画的的变化值
            var bianhuazhi = (zhi - name.offsetLeft) / 10
            //查清是正数还是负数，正数向上取整 负数向下取整
            bianhuazhi = bianhuazhi > 0 ? Math.ceil(bianhuazhi) : Math.floor(bianhuazhi)

            //然后赋值给缓动动画
            name.style.left = name.offsetLeft + bianhuazhi + 'px'



            //添加一个定时器结束条件
            if (name.offsetLeft == zhi) {
                clearInterval(name.gif)
                //回调函数一般写在定时器结束条件内
                if (huidiao) {
                    huidiao()
                }
            }
        }, 50)
    }
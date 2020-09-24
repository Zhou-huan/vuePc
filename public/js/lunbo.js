
var wrap = document.getElementsByClassName('wrap')[0],
  dotsItem = document.getElementsByClassName('dots-item'),
  pre = document.getElementById('pre'),
  next = document.getElementById('next'),
  swiper = document.getElementsByClassName('swiper')[0];

var len = dotsItem.length; // 获取小圆点数量，也就是图片的数量
var current = 0; // 记录当前是第几张图片
var timer = null; // 计时器ID

// 复制最后一张图片放在第一个位置，复制第一张放在最后
var firstImg = wrap.children[len - 1].cloneNode(true),
  lastImg = wrap.children[0].cloneNode(true);

// 插入节点
wrap.insertBefore(firstImg, wrap.children[0]);
wrap.appendChild(lastImg);

// 自动播放，图片向左运动
timer = setInterval(slide, 2000);
slide();

// 鼠标移入停止播放
swiper.onmouseover = function () {
  clearInterval(timer);
}

// 鼠标离开继续播放
swiper.onmouseout = function () {
  timer = setInterval(slide, 2000);
}

// 点击上一张，图片向右运动
pre.onclick = slide;

// 点击下一张，图片向左运动
next.onclick = slide;

// 点击小圆点切换图片
for (var j = 0; j < len; j++) {
  dotsItem[j].index = j; // 记录下标
  dotsItem[j].onclick = function () {
    current = this.index;
    slide();
  }
}

// slide 用于 移动图片
function slide() {
  // 判断方向
  var direction = (this.id == 'pre') ? -1 : 1;
  current = current + direction; // 当前图片更新

  // 修改位置
  wrap.style.left = -600 * current + 'px';
  wrap.style.transition = 'all .3s';

  // 临界点判断
  if (current == 0 || current > len) {
    // 更新 current
    current = (current == 0) ? len : 1;

    // 监听过渡结束事件
    wrap.addEventListener('transitionend', function () {
      wrap.style.left = -600 * current + 'px';
      wrap.style.transition = 'all 0s';
    }, false);
  }

  // 切换小圆点
  tab(current - 1);
}

// 控制当前小圆点的样式
function tab(index) {
  for (var i = 0; i < len; i++) {
    dotsItem[i].classList.remove('on');
  }

  // 然后给当前的小圆点添加 .on
  dotsItem[index].classList.add('on');
}

//手势轮播
var down;
$(document).mousedown(function (event) { //获取鼠标按下的位置
  var down = event.pageX;
  console.log(down);
});
$(document).mouseup(function (event) {//鼠标释放
  var up = event.pageX;
  console.log(up);

  (function(){
    var dvalue = down - up;
    window.create = function(){
      if(dvalue > 0){
        slide();
      }else if(dvalue < 0){
        
      }
    }
  })()
})


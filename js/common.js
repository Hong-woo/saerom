
$(document).ready(function(){ // html 문서가 준비되었을 때 실행
"use strict";
// script start

// #gnb
$(document).on('click','#gnb .btn-toggle',function(){
    $('#gnb .gnb-depth1 > li > .btn').removeClass('active');
    $(this).addClass('active').siblings('.gnb-depth2').slideToggle('fast').parent().siblings().find('.gnb-depth2').slideUp('fast');
});
$(document).on('click','.quick-nav .btn.menu',function(){
    $('#gnb').addClass('active');
});
$(document).on('click','#gnb .btn-gnb-close',function(){
    $('#gnb').removeClass('active');
});

// .snb .btn-toggle
$(document).on('click','.snb .btn-toggle',function(){
    $(this).siblings('.snb-depth2').slideToggle('fast').parent().siblings().find('.snb-depth2').slideUp('fast');
});

// .btns-right .btn-toggle
$(document).on('click','.btns-right .btn-toggle',function(){
    $(this).toggleClass('active').siblings('.btns-box').slideToggle('fast');
});

// file-search
$(document).on('change','.file-01 input[type=file]',function(){
    var fileName = $(this).val();
    $(this).parent().siblings('.file-view').addClass('active').find('.file-name .btn').text(fileName);
});

// .flip-01
$(document).on('click','.flip-mo-intro .btn',function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var index = $(this).parent().index();
    $('.flip-step > li').eq(index).find('.num').addClass('active').parent().siblings().find('.num').removeClass('active');
    $('.flip-01').addClass('mo-step').find('.flip-con').removeClass('active');
    $(target).addClass('active');
    if ( $(target).hasClass('flip-first') ){
        $('.flip-btns').removeClass('step-ing step-last').addClass('step-first');
    } else if ( $(target).hasClass('flip-ing') ) {
        $('.flip-btns').removeClass('step-first step-last').addClass('step-ing');
    } else if ( $(target).hasClass('flip-last') ) {
        $('.flip-btns').removeClass('step-first step-ing').addClass('step-last');
    } else {}
    $('html,body').scrollTop(0);
});
$(document).on('click','.flip-btns .btn',function(e){
    e.preventDefault();
    var index = $('.flip-con.active').index();
    if ( $(this).hasClass('btn-prev') ){
        $('.flip-con.active').removeClass('active').prev('.flip-con').addClass('active').find('.flip-title').focus();
        $('.flip-step .num.active').removeClass('active').parent().prev().find('.num').addClass('active');
        if ( $('.flip-con.active').hasClass('flip-first') ){
            $('.flip-btns').removeClass('step-ing').addClass('step-first');
        } else if ( $('.flip-con.active').hasClass('flip-ing') ){
            $('.flip-btns').removeClass('step-last').addClass('step-ing');
        }
    } else if ( $(this).hasClass('btn-next') ){
        $('.flip-con.active').removeClass('active').next('.flip-con').addClass('active').find('.flip-title').focus();
        $('.flip-step .num.active').removeClass('active').parent().next().find('.num').addClass('active');
        if ( $('.flip-con.active').hasClass('flip-last') ){
            $('.flip-btns').removeClass('step-ing').addClass('step-last');
        } else if ( $('.flip-con.active').hasClass('flip-ing') ){
            $('.flip-btns').removeClass('step-first').addClass('step-ing');
        }
    }
    $('html,body').scrollTop(0);
});

// popup
$(document).on("click",'.btn-popup-open',function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $(target).fadeIn('fast');
});
$(document).on("click",'.btn-popup-close',function(e){
    e.preventDefault();
    $(this).parents('.popup-wrap').fadeOut('fast');
});

// list all check
$(document).on("click",'.btn-allcheck',function(e){
    e.preventDefault();
    var target = $(this).attr('data-target');
    
    if ( $(this).hasClass('active') ){
        $("input[type=checkbox]").each(function(){
            if ( $(this).attr('name') == target ){
                $(this).prop("checked", false);
            }
        });
        $('.btn-allcheck').each(function(){
            if ( $(this).attr('data-target') == target ){
                $(this).removeClass('active');
            }
        });
    } else {
        $("input[type=checkbox]").each(function(){
            if ( $(this).attr('name') == target ){
                $(this).prop("checked", true);
            }
        });
        $('.btn-allcheck').each(function(){
            if ( $(this).attr('data-target') == target ){
                $(this).addClass('active');
            }
        });
    }
});

// accordion
$(document).on("click",'.accordion-01 .btn-toggle',function(e){
    e.preventDefault();
    if ( $(this).hasClass('active') ){
        $(this).removeClass('active').parent().parent().find('.accordion-con').removeClass('active');
    } else {
        $(this).addClass('active').next('.accordion-con').addClass('active');
    }
});

// .list-select-01
$(document).on('click','.list-select-01 .btn-toggle',function(e){
    e.preventDefault();
    $(this).toggleClass('active').next('ul').slideToggle('fast');
});
$(document).on('click','.list-select-01 ul .btn',function(e){
    e.preventDefault();
    var num = $(this).find('.num').text();
    var price = $(this).find('.price').text();
    $(this).parent().parent().slideUp('fast').siblings('.btn-toggle').find('.num').text(num).siblings('.price').text(price);
    $(this).parent().parent().slideUp('fast').siblings('.btn-toggle').removeClass('active');
});

// .box-lesson
$(document).on('click','.box-lesson .btn-toggle',function(e){
    e.preventDefault();
    if ( $(this).hasClass('active') ){
        $(this).removeClass('active').next('.list-lesson-toggle').removeClass('active');
    } else {
        $('.box-lesson .btn-toggle').removeClass('active').next('.list-lesson-toggle').removeClass('active')
        $(this).addClass('active').next('.list-lesson-toggle').addClass('active');
    }
});



// 영역 외 클릭
$(document).on("click",'body',function(e){
    // .snb
    if ( $('.snb').has(e.target).length === 0 ){
        $('.snb-depth2').slideUp('fast');
    }
    // .btns-right .btn-toggle
    if ( $('.contents-title .btns-right').has(e.target).length === 0 && $(window).width() < 1025 ){
        $('.contents-title .btn-toggle').removeClass('active').siblings('.btns-box').slideUp('fast');
    }

    // .list-select-01
    if ( $('.list-select-01').length > 0 ){
        if ( $('.list-select-01').has(e.target).length === 0 ){
            $('.list-select-01 .btn-toggle').removeClass('active').siblings('ul').slideUp('fast');
        }
    }

    // .box-lesson
    if ( $('.box-lesson').length > 0 ){
        if ( $('.box-lesson').has(e.target).length === 0 ){
            $('.box-lesson .list-lesson-toggle').removeClass('active').prev('.btn-toggle').removeClass('active');
        }
    }
    
});

// input text delete
$(document).on('keyup','.input-03 input',function(){
    var btnDelete = $(this).next('.btn-input-delete');
    if ( $(this).val().trim() == '' ){ // 빈값일 때
        btnDelete.hide();
    } else {
        btnDelete.show();
    }
});
$(document).on("click",'.btn-input-delete',function(e){
    e.preventDefault();
    $(this).hide().prev().focus().val('');
});

if ( $('.slide-schedule').length > 0 ){
    $('.slide-schedule').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        responsive: [
        {
            breakpoint: 1280,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 780,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}

// tab // 231004 추가
$(document).on('click','.tab-wrap .tab-head .btn',function(e){
    e.preventDefault();
    var tabTarget = $(this).attr('href');
    $(this).addClass('active').parent().siblings().find('.btn').removeClass('active');
    $(tabTarget).addClass('active').siblings().removeClass('active');
    $(tabTarget).find('.tab-title').focus();
});

// datepicker
if ( $(".input-datepicker").length > 0 ){
    $(".input-datepicker").datepicker({
        dateFormat: "yy.mm.dd",
        showMonthAfterYear: true ,
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    });
}
if ( $(".input-datepicker-02").length > 0 ){
    $(".input-datepicker-02").datepicker({
        dateFormat: "yy.mm.dd",
        showMonthAfterYear: true ,
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        showOn : "button",
        buttonImage : "../images/ico_calendar.svg",
        buttonImageOnly : false,
        buttonText : "날짜 선택 열기"
    });
}
// ui-datepicker-trigger로 datepicker 호출시, 새롭게 그려지는  datepicker에 포커스
$(document).on('keydown',".ui-datepicker-trigger",function(keyNum){	
    var keyCode = keyNum.originalEvent.keyCode
    if(keyCode == 13){
        setTimeout(function() {
            $(".ui-datepicker-prev").focus(); // datepicker가 새로 그려진 이후 포커스 지정
        }, 0)																
    }
    $(this).addClass('datefocus'); // 날짜 선택 후 포커스 찾아올 클래스
});
// 날짜 선택시 기존 버튼에 포커스
$(document).on('keydown','.ui-state-default',function(keyNum){ 
    var keyCode = keyNum.originalEvent.keyCode
    if(keyCode == 13){
        setTimeout(function() {
            $('.datefocus').focus().removeClass('datefocus');
        }, 0)
    }
});

// monthpicker
if ( $(".input-datepicker-03").length > 0 ){
    $(".input-datepicker-03").monthpicker({
        pattern: "yyyy.mm",
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        optionOnFocus: true,
        startYear: 1960,
        showOn : "button",
        buttonImage : "../images/ico_calendar.svg",
    });
}

navLoad();

// script end
});


function navLoad(){
    (function () {
        return new Promise(function(resolve, reject) {
            $.get('../include/header.gnb.html', function(response) {
                if (response) {
                    resolve(response);
                }
                reject(new Error('Request is failed'));
            });
        });
    })()
    .then(function(data) {
        $('#header').html(data);
    }).catch(function(err) {

    });
}
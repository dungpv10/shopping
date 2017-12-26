/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // ------------------------------------------------------- //
    // Search Box
    // ------------------------------------------------------ //
    $('#search').on('click', function (e) {
        e.preventDefault();
        $('.search-box').fadeIn();
    });
    $('.dismiss').on('click', function () {
        $('.search-box').fadeOut();
    });

    // ------------------------------------------------------- //
    // Card Close
    // ------------------------------------------------------ //
    $('.card-close a.remove').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.card').fadeOut();
    });


    // ------------------------------------------------------- //
    // Adding fade effect to dropdowns
    // ------------------------------------------------------ //
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });


    // ------------------------------------------------------- //
    // Login  form validation
    // ------------------------------------------------------ //
    $('#login-form').validate({
        messages: {
            loginUsername: 'please enter your username',
            loginPassword: 'please enter your password'
        }
    });

    // ------------------------------------------------------- //
    // Register form validation
    // ------------------------------------------------------ //
    $('#register-form').validate({
        messages: {
            registerUsername: 'please enter your first name',
            registerEmail: 'please enter a vaild Email Address',
            registerPassword: 'please enter your password'
        }
    });

    // ------------------------------------------------------- //
    // Sidebar Functionality
    // ------------------------------------------------------ //
    $('#toggle-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');

        $('.side-navbar').toggleClass('shrinked');
        $('.content-inner').toggleClass('active');
        $('.navbar-header .brand-small').hide();
            $('.navbar-header .brand-big').hide();

        if ($(window).outerWidth() > 1183) {
            if ($('#toggle-btn').hasClass('active')) {
                $('.navbar-header .brand-small').hide();
                $('.navbar-header .brand-big').show();
            } else {
                $('.navbar-header .brand-small').show();
                $('.navbar-header .brand-big').hide();
            }
        }

        if ($(window).outerWidth() < 1183) {
            $('.navbar-header .brand-small').show();
            $('.navbar-header .brand-big').hide();
        }
    });

    // ------------------------------------------------------- //
    // Transition Placeholders
    // ------------------------------------------------------ //
    $('input.input-material').on('focus', function () {
        $(this).siblings('.label-material').addClass('active');
    });

    $('input.input-material').on('blur', function () {
        $(this).siblings('.label-material').removeClass('active');

        if ($(this).val() !== '') {
            $(this).siblings('.label-material').addClass('active');
        } else {
            $(this).siblings('.label-material').removeClass('active');
        }
    });

    // ------------------------------------------------------- //
    // External links to new window
    // ------------------------------------------------------ //
    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });    

    $('.addproduct-cat li').on('click', function (e) {
        $('.addproduct-cat li').removeClass('active');
        $('.subcatbox').fadeOut();
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
        $('.subcatbox').fadeIn();
        //e.preventDefault();
        //$('.search-box').fadeIn();
    });
    $('.addproduct-subcat li').on('click', function (e) {
        $('.addproduct-cat li').removeClass('active');
        $('.agreeterm').fadeOut();
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
        $('.agreeterm').fadeIn();
        //e.preventDefault();
        //$('.search-box').fadeIn();
    });
    $(function()
    {
        $(document).on('click', '.formform .btn-add', function(e)
        {
            e.preventDefault();

            var controlForm = $('.controls .formform:first'),
                currentEntry = $(this).parents('.entry:first'),
                newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            controlForm.find('.entry:not(:last) .btn-add')
                .removeClass('btn-add').addClass('btn-remove')
                .removeClass('btn-success').addClass('btn-danger')
                .html('<span class="fa fa-minus-circle"></span>');
        }).on('click', '.formform .btn-remove', function(e)
        {
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
        });

    });

    $(function()
    {
        $(document).on('click', '.formform2 .btn-add', function(e)
        {
            e.preventDefault();

            var controlForm = $('.controls .formform2:first'),
                currentEntry = $(this).parents('.entry:first'),
                newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            controlForm.find('.entry:not(:last) .btn-add')
                .removeClass('btn-add').addClass('btn-remove')
                .removeClass('btn-success').addClass('btn-danger')
                .html('<span class="fa fa-minus-circle"></span>');
        }).on('click', '.formform2 .btn-remove', function(e)
        {
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
        });

    });

    $(function()
    {
        $(document).on('click', '.formform3 .btn-add', function(e)
        {
            e.preventDefault();

            var controlForm = $('.controls .formform3:first'),
                currentEntry = $(this).parents('.entry:first'),
                newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            controlForm.find('.entry:not(:last) .btn-add')
                .removeClass('btn-add').addClass('btn-remove')
                .removeClass('btn-success').addClass('btn-danger')
                .html('<span class="fa fa-minus-circle"></span>');
        }).on('click', '.formform3 .btn-remove', function(e)
        {
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
        });

    });

    $('#priceoption input').on('change', function() {
        $('.priceoption').removeClass('active');
        var mypriceOption = $('input[name=setprice]:checked', '#priceoption').val();
        //$(mypriceOption).addClass('active');
        $('.'+mypriceOption).addClass('active');
    });
    $('#buyoption input').on('change', function() {
        $('.buyallow').removeClass('active');
        var mybuyOption = $('input[name=buybutton]:checked', '#buyoption').val();
        //$(mypriceOption).addClass('active');
        $('.'+mybuyOption).addClass('active');
    });
    //var chatfriend = $('.col-lg-9.chatbox:before');
    var $chatfriendmobile = $( "<span id='friendlist'></span>" );
    var $closechatfriendmobile = $( "<span id='closefriendlist'></span>" );
    $( ".col-lg-9.chatbox" ).prepend( $( $chatfriendmobile ) );
    $( ".chatpage .col-lg-3" ).prepend( $( $closechatfriendmobile ) );
    $('#friendlist').click(function() {
        //$('.chatpage .col-lg-3').css('display','block');
        $(".chatpage .col-lg-3").fadeIn();
        $('.col-lg-9.chatbox').css('display','none');
        //alert( "Handler for .click() called." );
    });

    $(".chat-item").click(function() {
        //$('.chatpage .col-lg-3').css('display','block');
        $(".chatpage .col-lg-3").fadeOut();
        $('.col-lg-9.chatbox').css('display','block');
        //alert( "Handler for .click() called." );
    });
    $("#closefriendlist").click(function() {
        //$('.chatpage .col-lg-3').css('display','block');
        $(".chatpage .col-lg-3").fadeOut();
        $('.col-lg-9.chatbox').css('display','block');
        //alert( "Handler for .click() called." );
    });
});

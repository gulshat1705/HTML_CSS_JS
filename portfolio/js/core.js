$(document).ready(function() {
    $('.works-slide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.works-slide-phone'
    });
    $('.works-slide-phone').slick({
        dots: false,
        arrows: false
    });

    $('#main-nav-btn').click(function(){
        $('.navigation_block').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.is-active').addClass('not-active').removeClass('is-active')
            },600)
        }
    });

    $(window).bind("resize load", checkPosition);

    function checkPosition()
        {
            if($(window).innerWidth() < 640)
            {
                    $('.main-nav-btn').css('display','block');
            }
            else{
                    $('.main-nav-btn').css('display','none');
                setTimeout(function(){
                    $('.active').addClass('not-active').removeClass('active');
                },600);

                }
        }




    var options = {
        url: 'https://restcountries.eu/rest/v2/all?fields',
        getValue: "name",
        theme: "square",
        template: {
            type:"iconLeft",
            fields: {
                iconSrc: 'flag',
            }
        },
        list: { match: { enabled: true} }
    };

    $('#postCountry').easyAutocomplete(options);
    $('#postDate').datepicker();

    var postsKeyName = 'posts';
    var posts = [];
    var EditPostID;

    function appendPostToDOM(postData, index) {
        var post = $('<div class="post">');
        post.attr('id', 'post' + index);
        var postHead = $('<div class="post-head">');
        var postCountry = $('<span class="post-country">');
        var postDate = $('<span class="post-date">');
        var postID = $('<span class="post-id">');
        var postText = $('<p class="post-text">');
        var postEditBtn = $('<button class="edit-btn post-btn">Edit</button>');
        var postRemoveBtn = $('<button class="remove-btn post-btn">Remove</button>');
        postCountry.html('being at <b class="red">' + postData.country + '</b> ');
        postDate.html('at <b class="for-edit">' + postData.date + '</b> ');
        postID.html('Post <b>#' + index + '</b> ');
        postText.text(postData.text);
        postHead.append(postID, postDate, postCountry, postRemoveBtn, postEditBtn);
        post.append(postHead, postText);
        $('#posts').append(post);
    }

    function readPostsFromLocalStorage() {
        var postsInLocalStorage = localStorage.getItem(postsKeyName);
        posts = JSON.parse(postsInLocalStorage) || [];
        for (var i = 0; i < posts.length; i++) {
            appendPostToDOM(posts[i], i + 1);
        }
    }

    function savePostsToLocalStorage() {
        var postsInString = JSON.stringify(posts);
        localStorage.setItem(postsKeyName, postsInString);
    }
    function saveNewPostToLocalStorage(postData) {
        posts.push(postData);
        savePostsToLocalStorage();
    }

    function getNewPostValues() {
        return {
            country: $('#postCountry').val(),
            date: $('#postDate').val(),
            text: $('#postText').val()
        };
    }

    $('#save').on('click', function (e) {
        var postData = getNewPostValues();
        appendPostToDOM(postData, posts.length + 1);
        saveNewPostToLocalStorage(postData);
        e.preventDefault();
    });

    $(document).on('click','.remove-btn', function(e) {
        var thisPostID = $(this).parent().parent().attr('id').replace(/[^0-9]/gi,'') - 1;
        posts.splice(thisPostID, 1);
        savePostsToLocalStorage();
        $('.post').remove();
        readPostsFromLocalStorage();
        e.preventDefault();
    });

    $(document).on('click','.edit-btn', function(e) {
        EditPostID = $(this).parent().parent().attr('id').replace(/[^0-9]/gi,'') - 1;
        var editCountry = posts[(EditPostID)].country;
        var editDate = posts[(EditPostID)].date;
        var editText = posts[(EditPostID)].text
        $('#postCountry').val(editCountry);
        $('#postDate').val(editDate);
        $('#postText').val(editText);
        $('#save').hide();
        $('#save-edit').show();
        e.preventDefault();
    });
    $(document).on('click','#save-edit', function(e) {
        var postData = getNewPostValues();
        posts[(EditPostID)].country = postData.country;
        posts[(EditPostID)].date = postData.date;
        posts[(EditPostID)].text = postData.text;
        savePostsToLocalStorage();
        $('.post').remove();
        readPostsFromLocalStorage();
        $('#postCountry').val('');
        $('#postDate').val('');
        $('#postText').val('');
        $('#save').show();
        $('#save-edit').hide();
        e.preventDefault();
    });

    readPostsFromLocalStorage();
    $('#save-edit').hide();

});


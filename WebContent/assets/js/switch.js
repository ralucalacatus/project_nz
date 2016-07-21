function toggle_nav() {
    var lang = document.getElementById("navToggle");
    if ( lang.className === 'nav' ) {
        lang.className = 'nav active';
        // lang.className = 'nav nav-active';
    } else {
        lang.className = 'nav';
    }
    //document.getElementById("selectLang").classList.toggle('select-active');
}

//-----------------------------------------------
function toggle_search() {
    var lang = document.getElementById("searchToggle");
    if ( lang.className === 'search' ) {
        lang.className = 'search active';
    } else {
        lang.className = 'search';
    }
}
function close_search() {
    var lang = document.getElementById("searchToggle");
    if ( lang.className === 'search active' ) {
        lang.className = 'search';
    }
}


//-----------------------------------------------
function toggle_quickLogin() {
    var lang = document.getElementById("loginToggle");
    if ( lang.className === 'quick-login' ) {
        lang.className = 'quick-login active';
    } else {
        lang.className = 'quick-login';
    }
}
function close_quickLogin() {
    var lang = document.getElementById("loginToggle");
    if ( lang.className === 'quick-login active' ) {
        lang.className = 'quick-login';
    }
}





//-----------------------------------------------
function toggle_popup1() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay' ) {
        lang.className = 'popup-overlay active p1';
    } else {
        lang.className = 'popup-overlay';
    }
}
function close_popup1() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay active p1' ) {
        lang.className = 'popup-overlay';
    }
}

//-----------------------------------------------
function toggle_popup2() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay' ) {
        lang.className = 'popup-overlay active p2';
    } else {
        lang.className = 'popup-overlay';
    }
}
function close_popup2() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay active p2' ) {
        lang.className = 'popup-overlay';
    }
}

//-----------------------------------------------
function toggle_popup3() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay' ) {
        lang.className = 'popup-overlay active p3';
    } else {
        lang.className = 'popup-overlay';
    }
}
function close_popup3() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay active p3' ) {
        lang.className = 'popup-overlay';
    }
}

//-----------------------------------------------
function toggle_popup4() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay' ) {
        lang.className = 'popup-overlay active p4';
    } else {
        lang.className = 'popup-overlay';
    }
}
function close_popup4() {
    var lang = document.getElementById("popupToggle");
    if ( lang.className === 'popup-overlay active p4' ) {
        lang.className = 'popup-overlay';
    }
}


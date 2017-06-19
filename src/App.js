import './App.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Menu from './Menu';
import Item from './Item';
import ScreensaverItem from './ScreensaverItem';
import {ItemMap} from './ItemMap';
import ItemPhoto from './ItemPhoto';
import {ItemPhotoMap} from './ItemPhotoMap';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clickedID: 0,
      classNamePhotos: "ItemPhoto-isNotVisible"
    };
    this.showPhotos = this.showPhotos.bind(this);
  }
 
  componentDidMount() {
    window.addEventListener('click', this.showPhotos);


    var screensaver = (function() {

      var 
        _durationBeforeSlide = 4000, //3000,
        _durationBeforeActivateSS = 6000, //60000,
        _durationFade = 2000,
        _timeoutSlide = false,
        _timeoutTracking = false;
      
      function start() {
        // console.log('Screensaver.start()');


        var $cont = $('#screensaver');
        
        //$cont.addClass('active');
        $cont
          .addClass('starting')
          .fadeIn(0);

        $cont
            .find('.item')
            .first()
            .addClass('active');

        setTimeout(function() {

          $cont
            .addClass('active')
            .removeClass('starting');
        }, 3000);

        stopMouseTracking();

        clearTimeout(_timeoutSlide);
        _timeoutSlide = setTimeout(gotoNext, _durationBeforeSlide);
      }

      function stop() {
        // console.log('  stop()');

      
        var $ss = $('#screensaver');

        $ss.fadeOut(_durationFade, function() {

          $ss
            .removeClass('active')
            .find('.item.active')
            .removeClass('active');

        });   

        clearTimeout(_timeoutSlide);

        initMouseTracking();
      }

      function mouseMoving() {
        // console.log('  mouseMoving()');

        clearTimeout(_timeoutTracking);
        
        _timeoutTracking = setTimeout(function() {

          start();

        }, _durationBeforeActivateSS);
      }

      function initMouseTracking() {
        // console.log('  initMouseTracking()');

        var $cont = $('#screensaver');

        if($cont.length > 0) {

          $('body').mousemove(function(){
            throttle( mouseMoving() ,1000);
          });

          $(window).scroll(function(){
            throttle( mouseMoving() ,600);
          });

          mouseMoving();
        }   
      }

      function stopMouseTracking() {
        // console.log('  stopMouseTracking()');

        $('body').unbind('mousemove');
        clearTimeout(_timeoutTracking);
      }

      function gotoNext() {
        // console.log('  gotoNext()');

        var 
          $cont = $('#screensaver'),
          $active = $cont.find('.item.active'),
          $next = $active.next();

        $active.removeClass('active');

        if($next.length > 0) {

          $next.addClass('active')
            .css('left', Math.random() * 10 + 'vw')
            .css('top', Math.random() * 10 + 'vh');

        } else {
          
          $cont.find('.item').first().addClass('active');
        }

        _timeoutSlide = setTimeout(gotoNext, _durationBeforeSlide);
      }

      function throttle (callback, limit) {

        var wait = false;
        return function () {
          if (!wait) {

            callback.apply(null, arguments);
            wait = true;
            setTimeout(function () {
              wait = false;
            }, limit);
          }
        }
      }


      return {
        init: function() {

          var $ss = $('#screensaver');

          _durationBeforeSlide = $ss.data('duration-scroll');
          _durationBeforeActivateSS = $ss.data('duration-start');

          $ss.click(function() {
            // console.log('Screensaver.click()');

            stop();
          });

          $(document).keydown(function(e) {

            var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
            // console.log(key);

            if (key === 27 || key === 32){ //esc or space
              stop();
            }
          });
        },
        initMouseTracking: initMouseTracking,
        stopMouseTracking: stopMouseTracking,
        start: start
      };
    })();


    screensaver.init();
    screensaver.initMouseTracking();
    // screensaver.start();
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.showPhotos);
  }
  
  showPhotos(e) {
    e.target.className === "Item-Photos-Button"? this.setState({clickedID: e.target.id, classNamePhotos:"ItemPhoto-isVisible" }) : this.setState({clickedID: 0, classNamePhotos: "ItemPhoto-isNotVisible"});
  }



  render() {
    return (
      <div className="App">
        <div className="App-Header"> kalli retzepi</div> 
        <div id="screensaver" data-duration-start="3000" data-duration-scroll="4000">
          {ItemPhotoMap.map((d,i) =>  <ScreensaverItem key={i} fragments={d.fragments}/>) }
        </div>  
        <Menu projects={this.state.projects}/> 
        <div className="App-Container">
          {ItemMap.map((d,i) => <Item key={i} id={i} header={d.header} type={d.type} text={d.text} photos={d.photos} links={d.links}/>) }
        </div>
        <ItemPhoto className={this.state.classNamePhotos} photos={ItemPhotoMap[this.state.clickedID].photos} />
        <div className="About"> <a href="mailto:kallirroi.retzepi@gmail.com">contact</a></div>
      </div>
    );
  }
}

export default App;
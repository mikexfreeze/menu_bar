import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});



Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

// 模板测试开始
var postsData ={title: 'Discover Meteor',
  url: 'http://wiki.jikexueyuan.com/project/discover-meteor/'}



// var postsData = [
//   {
//     title: 'Discover Meteor',
//     url: 'http://wiki.jikexueyuan.com/project/discover-meteor/'
//   },
//   {
//     title: 'Meteor Tutorial',
//     url: 'https://www.meteor.com/tutorials/blaze/creating-an-app'
//   },
//   {
//     title: 'Baidu',
//     url: 'http://www.baidu.com'
//   }
// ];

Template.singleBtn.helpers({
  posts: postsData
});

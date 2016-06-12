/**
 * Created by XiaoYang on 2016/6/12.
 */
if (Posts.find().count() === 0){
	Posts.insert({
		title: 'Discover Meteor',
		url: 'http://wiki.jikexueyuan.com/pro',
		flagged: false
	});
	Posts.insert({
		title: 'Meteor Tutorial',
		url: 'https://www.meteor.com/tutorial',
		flagged: false
	});
	Posts.insert({
		title: 'Baidu',
		url: 'https://www.baidu.com',
		flagged: false,
		author: 'me',
		catagory: 'Java'
	});
}
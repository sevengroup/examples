exports.install = function(framework) {
	framework.route('/', json_homepage);
};

function json_homepage() {

    var self = this;
	var User = MODEL('user');

    self.json(User.create(), true);

}
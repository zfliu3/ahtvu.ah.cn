const util = require('util');

module.exports = function (req, res, utils) {

    var deferred = Promise.defer();

    utils.request({
        url: 'open/get_posts_by_category',
        method: 'POST',
        qs: {
            siteId: req.site.id,
            categoryId: 'ddcoaeeno7tnww8f9el0da',
            pageSize: 6
        }
    }, function (result) {

        var data = {
            category: {},
            list: [],
            first: undefined
        };

        if (result.code != 200) {

            deferred.resolve(data);
            return;
        };

        result.body = JSON.parse(result.body);

        data.category = {
            href: util.format('category?id=%s', result.body.category.id),
            title: result.body.category.title
        };
        result.body.data.forEach(function (e) {

            data.list.push({
                ori_title: e.title,
                title: utils.subString(e.title, 30),
                date: e.date_published,
                summary: e.summary,
                href: util.format('detail?id=%s', e.id)
            });

        }, this);

        deferred.resolve({ data: data });
    },deferred);

    return deferred.promise;
}
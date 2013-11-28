function (doc)
{
    var date =  require('views/lib/date').Date.parseString(doc.published, 'yyyy-MM-dd HH:mm:ss.000000');
    if (date) {
        emit([ doc.type, date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds() ]);
    }
}

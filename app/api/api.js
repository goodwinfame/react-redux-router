/**
 * Created by Superwen on 16/6/2.
 */
import 'whatwg-fetch';

export default {
    getPage(cb, pageName) {
        fetch('data/' + pageName + '.json')
            .then((res) => {
                return res.json();
            })
            .then((page) => {
                cb(page)
            })
            .catch((ex) => {
                console.log(ex);
            });
    }

}

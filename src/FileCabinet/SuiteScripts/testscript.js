/**
 * @NScriptType UserEventScript
 * @NAPIVersion 2.1
 */
define(['N/record', 'N/url', 'N/https', 'N/task', 'N/runtime', 'N/search'],
    /**
     * @param {record} record
     */
    function (record, url, https, task, runtime, search) {

        return {

            afterSubmit: function (context) {

                log.debug('hello-world-aftersubmit');

                try{
                    
                    console.log('test', 'test');
                    console.log('test2', 'test2');

                } catch (e){
                    log.error('error', JSON.stringify(e));
                }

            }

        };
    });


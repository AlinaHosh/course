export let createUrl=function(str, objects){
    str=str.replace('{id}',objects.id);
    str=str.replace('{list}',objects.list);
    return str;
};

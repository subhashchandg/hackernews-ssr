export function getDateDifferenceInHours(inputDate){
    return Math.floor(Math.abs(new Date() - new Date(inputDate)) / 36e5)
}

export function getDomainName(url){
    if(url){
        const urlHostname =  (new URL(url) || {}).hostname || '';
        return urlHostname.replace('www.','');
    }
    
    return '';
}
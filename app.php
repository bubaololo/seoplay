<?php


//read and decode json file
$data;
// function findmail($n) {
//     $urlcontent = file_get_contents($n); 
//     $mailRE = '/\b\w+@\w+\.[^(jpg)(png)(webp)(jpeg)(gif)(avif)]\w{2,8}/';
//     $result = preg_match_all($mailRE,$urlcontent,$mailMatches );
//     $matches = array_unique($mailMatches[0]);
//     // $matches = implode("<br><br>",$mailMatches);
//     return $matches;
// }
// function convertToSimpleArray($array){
//     global $data; 
//     if(is_array($array)){
//         foreach($array as $below){
//             $res = convertToSimpleArray($below); 

//         }
//     }else{
//         $data[] = $array; 
//     }
//     return $data; 
// }

//write and encode json file
function writeData() {
global $data;
$jsonData = json_encode($data, JSON_UNESCAPED_UNICODE);
file_put_contents('t.json',$jsonData);
}


//manipulate with array 
if (trim($_POST['one']) !='') {
    global $data;
    $formdata = preg_replace('/\s/', '%20', (trim($_POST['one'])));
    $searchURL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyARRcNevgwiQcB0cFEAdrIzcyQF2Y2mkIA&cx=acfd41e8274e5b238&q=site:'.$formdata;
 
    $urlcontent = file_get_contents($searchURL);
    echo "<pre>";
    $jsonReady = json_decode($urlcontent, JSON_OBJECT_AS_ARRAY);

    $result = $jsonReady['queries']['request']['0']['totalResults'];
    // global $data = $jsonReady['queries'][0]['totalResults']; 

    $data = $result;

    writeData();
    var_dump($result);
}

else {
    exit;
}


?>
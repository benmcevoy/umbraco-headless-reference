# import requires a trusted SSL cert if you wish to use https 
$server = "http://localhost:46555/umbraco"
$key = "jIgQSf1av//QuuRbOCvm6VqwVljAA+0qxw4a41rAbsY="
$set = "ContentOnly"

dotnet usync run usync-import -p set=$set -s $server -k $key

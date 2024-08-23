# set target dir
$project = "../bed/bed.csproj"
$artifactPath = "./output/bed/wwwroot"

# clean
dotnet clean $project
if(Test-Path -LiteralPath $artifactPath) { 
    Remove-Item  -LiteralPath $artifactPath -Force -Recurse 
}

# if more control is required consider adding Directory.Build.props in the $project folder to configure msbuild
# publish
dotnet publish $project --artifacts-path $artifactPath


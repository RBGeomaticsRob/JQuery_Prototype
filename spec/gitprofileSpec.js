beforeEach(function(){
  jasmine.getFixtures().fixturesPath = ".";
  loadFixtures("gitprofile.html");
});
describe("Load a gitub profile", function(){
  it("can send a ajax request", function(){
    spyOn($,'ajax');
    $('.username').val('jadeKing');
    $('#profile-btn').click();
    var githubRespsonse = {
      "login" : "jadeKing",
      "public_repos" : 5,
      "followers" : 5
    };
    $.ajax.calls.mostRecent().args[0].success(githubRespsonse);
    expect('.stats').toContainHtml("Followers:5");
  });
});

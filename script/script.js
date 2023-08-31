function showText() {
  const manyTeamTitle = document.getElementById("manyTeam-Title");
  const manyTeamArrow = document.getElementById("manyTeam-Arrow");
  const manyTeamParagraph = document.getElementById("manyTeam-paragraph");

  manyTeamTitle.addEventListener("click", () => {
    manyTeamTitle.classList.toggle('main-subtitles_on');
    manyTeamParagraph.classList.toggle("main-paragraph_on");
    manyTeamArrow.classList.toggle("rotate");
  });


  const maximumFileTitle = document.getElementById('maximumFile-Title');
  const maximumFileArrow = document.getElementById('maximumFile-Arrow');
  const maximumFileParagraph = document.getElementById('maximumFile-paragraph');

  maximumFileTitle.addEventListener('click', ()=>{
    maximumFileTitle.classList.toggle('main-subtitles_on');
    maximumFileParagraph.classList.toggle('main-paragraph_on');
    maximumFileArrow.classList.toggle('rotate');
  });



  const resetPasswordTitle = document.getElementById('resetPassword-Title');
  const resetPasswordArrow = document.getElementById('resetPassword-Arrow');
  const resetPasswordParagraph = document.getElementById('resetPassword-paragraph');

  resetPasswordTitle.addEventListener('click', ()=>{
    resetPasswordTitle.classList.toggle('main-subtitles_on');
    resetPasswordParagraph.classList.toggle('main-paragraph_on');
    resetPasswordArrow.classList.toggle('rotate');
  })



  const cancelsubscriptionTitle = document.getElementById('cancelsubscription-Title');
  const cancelSubscriptionArrow = document.getElementById('cancelSubscription-Arrow');
  const cancelSubscriptionParagraph = document.getElementById('cancelSubscription-paragraph');

  cancelsubscriptionTitle.addEventListener('click', ()=>{
    cancelsubscriptionTitle.classList.toggle('main-subtitles_on');
    cancelSubscriptionParagraph.classList.toggle('main-paragraph_on');
    cancelSubscriptionArrow.classList.toggle('rotate');
  })


  const additionalSupportTitle = document.getElementById('additionalSupport-Title');
  const additionalSupportArrow = document.getElementById('additionalSupport-Arrow');
  const additionalSupportParagraph = document.getElementById('additionalSupport-paragraph');

  additionalSupportTitle.addEventListener('click', ()=>{
    additionalSupportTitle.classList.toggle('main-subtitles_on');
    additionalSupportParagraph.classList.toggle('main-paragraph_on');
    additionalSupportArrow.classList.toggle('rotate');
  })
}

showText();

const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'by'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '3 month'
    },
    //метод формирует строку: Мне 29 и я владею языками: RU ENG
    showAgeAndLangs: function(plan) {
        let ageAndLangs = `Мне ${personalPlanPeter.age} и я владею языками: `;
        for (let key in plan.skills.languages) {
            ageAndLangs += `${plan.skills.languages[key].toUpperCase()} `;
        }
        return ageAndLangs;
    }
};


function showExperience(plan) {
    const {exp} = personalPlanPeter.skills;
    console.log(exp);
    return exp;
}

function showProgrammingLangs(plan) {
    let result = '';
    for (let key in plan.skills.programmingLangs) {
            result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
    }

return result;
}
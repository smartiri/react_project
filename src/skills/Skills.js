import '../skills/Skills.css';
export default function Skills(){
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div class="skills_section">
                <div class="skill">
                    <h3 class="skill_title">Html</h3>
                    <progress class="progress_bar" value="95" max="100"></progress>
                </div>
                <div class="skill">
                    <h3 class="skill_title">CSS</h3>
                    <progress class="progress_bar" value="83" max="100"></progress>
                </div>
                <div class="skill">
                    <h3 class="skill_title">Javascript</h3>
                    <progress class="progress_bar" value="80" max="100"></progress>
                </div>
                <div class="skill">
                    <h3 class="skill_title">React</h3>
                    <progress class="progress_bar" value="32" max="100"></progress>
                </div>
                <div class="skill">
                    <h3 class="skill_title">Angular</h3>
                    <progress class="progress_bar" value="40" max="100"></progress>
                </div>
                <div class="skill">
                    <h3 class="skill_title">Java</h3>
                    <progress class="progress_bar" value="50" max="100"></progress>
                </div>
            </div>
        </div>
    )
}
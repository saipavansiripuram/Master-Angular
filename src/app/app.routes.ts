import { RouterModule, Routes } from "@angular/router";
import { Day1Component } from "./Components/day-1/day-1.component";
import { HomeComponent } from "./Components/home/home.component";
import { Day2Component } from "./Components/day-2/day-2.component";
import { MainComponent } from "./Components/main/main.component";
import { QuestionHomeComponent } from "./Components/question-home/question-home.component";
import { DownloadComponent } from "./pages/download/download.component";
import { Day3Component } from "./Components/day-3/day-3.component";
import { NgModule } from '@angular/core';
import { QuestionsAdvComponent } from "./pages/questions-adv/questions-adv.component";
import { ProjectsComponent } from "./pages/projects/projects.component";

export const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "home", component: HomeComponent },
  { path: "question", component: QuestionHomeComponent },
  { path: "questionadv", component: QuestionsAdvComponent },
  { path: "download", component: DownloadComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "day1", component: Day1Component },
  { path: "day/:id", component: Day1Component },
  { path: "day2", component: Day2Component },
  { path: "day3", component: Day3Component },
];

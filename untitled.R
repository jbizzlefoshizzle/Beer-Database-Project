library(tidyverse)
library(dplyr)

beer_data <- read_csv("beer_winners.csv")
beer_data

aa = beer_data %>% 
  group_by(Brewery, Medal)

n_distinct(aa)

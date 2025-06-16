provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket  = "app-cinema-tf-state1"
    key     = "app-cinema.tfstate"
    region  = "us-east-1"
    encrypt = true

  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    project     = var.project
    ManageBy    = "terraform"
    owner       = "Ram Sahu"


  }
}
class Ability
    include CanCan::Ability

    def initialize(user)
      user ||= User.new
      if user.role? :admin
        can :manage, :all
      



      elsif user.persisted?
        
        can :read, List do |list|
            list.try(:user) == user
        end

        can :create, List

        can :destroy, List do |list|
            list.try(:user) == user
        end

        can :update, List do |list|
            list.try(:user) == user
        end


# ***********************************************************
        cannot :read, Item

        can :create, Item

        cannot :update, Item

        can :destroy, Item do |item|
            item.list.try(:user) == user
        end

        # ***********************************************************

        can :read, User do |u|
            u.id == user.id
        end


        cannot :create, User
        cannot :update, User
        cannot :destroy, User

        
      else
        cannot :destroy, List
      end
    end
end